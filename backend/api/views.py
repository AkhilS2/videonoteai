from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound, VideoUnavailable
# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    return Response({
        'status': 'healthy',
        'message': 'API is working correctly'
    })

@api_view(['POST'])
@permission_classes([AllowAny])
def echo_link(request):
    link = request.data.get('link', '')
    return Response({'link': link}, status=status.HTTP_200_OK)

def extract_video_id(link):
    # Handles both youtu.be and youtube.com links
    if 'youtube.com' in link:
        # e.g. https://www.youtube.com/watch?v=VIDEOID
        if 'v=' in link:
            return link.split('v=')[1].split('&')[0]
    elif 'youtu.be/' in link:
        # e.g. https://youtu.be/VIDEOID
        return link.split('youtu.be/')[1].split('?')[0]
    return None

@api_view(['POST'])
@permission_classes([AllowAny])
def get_transcript(request):
    link = request.data.get('link', '')
    video_id = extract_video_id(link)
    if not video_id:
        return Response({'error': 'Invalid YouTube link.'}, status=status.HTTP_400_BAD_REQUEST)
    try:
        transcript_data = YouTubeTranscriptApi.get_transcript(video_id)
        transcript = " ".join([entry["text"] for entry in transcript_data])
        return Response({'transcript': transcript}, status=status.HTTP_200_OK)
    except (VideoUnavailable, TranscriptsDisabled, NoTranscriptFound) as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)   
