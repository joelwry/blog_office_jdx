'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Axe, Heart, Plus, ChevronDown, ChevronUp,} from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { useAuth } from '@/contexts/auth-context'

interface Track {
  id: number
  title: string
  artist: string
  url: string
}

interface MusicPlayerProps {
  playlist: Track[]
}

export default function MusicPlayer({ playlist }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const audioRef = useRef<HTMLAudioElement>(null)
  const { user } = useAuth()

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setError('Unable to play audio. Please check if the audio file exists.')
          })
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
      setCurrentTime(0)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      setDuration(audioRef.current.duration || 0)
    }
  }

  const handleTrackEnd = () => {
    if (currentTrack < playlist.length - 1) {
      setCurrentTrack(currentTrack + 1)
    } else {
      setCurrentTrack(0)
    }
  }

  const handlePrevTrack = () => {
    setCurrentTrack(currentTrack === 0 ? playlist.length - 1 : currentTrack - 1)
  }

  const handleNextTrack = () => {
    setCurrentTrack(currentTrack === playlist.length - 1 ? 0 : currentTrack + 1)
  }

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0])
    setIsMuted(newVolume[0] === 0)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume
      } else {
        audioRef.current.volume = 0
      }
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time: number) => {
    if (!isFinite(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleAddToPlaylist = () => {
    console.log(`Add track ${playlist[currentTrack].id} to playlist`)
  }

  return (
    <>
      {isMinimized && (
        <div
          className="fixed bottom-4 right-4 z-50 bg-purple-900 text-white rounded-full p-4 shadow-lg cursor-pointer"
          onClick={toggleMinimize}
        >
          <ChevronUp size={24} />
        </div>
      )}

      {!isMinimized && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-purple-900 p-4 shadow-lg flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between">
          <audio
            ref={audioRef}
            src={playlist[currentTrack].url}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleTrackEnd}
          />
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-lg font-semibold text-white">{playlist[currentTrack].title}</h3>
              <p className="text-sm text-gray-300">{playlist[currentTrack].artist}</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button onClick={handlePrevTrack} className="text-white hover:text-pink-500">
              <SkipBack />
            </button>
            <button onClick={togglePlay} className="text-white hover:text-pink-500">
              {isPlaying ? <Pause /> : <Play />}
            </button>
            <button onClick={handleStop} className="text-white hover:text-pink-500">
              <Axe />
            </button>
            <button onClick={handleNextTrack} className="text-white hover:text-pink-500">
              <SkipForward />
            </button>
          </div>
          <div className="flex items-center w-full sm:w-auto">
            <span className="text-sm text-white mr-2">{formatTime(currentTime)}</span>
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              onValueChange={(newTime) => {
                if (audioRef.current) {
                  audioRef.current.currentTime = newTime[0]
                }
              }}
              className="w-full sm:w-64"
            />
            <span className="text-sm text-white ml-2">{formatTime(duration)}</span>
          </div>

          <div className="w-full flex items-center justify-center sm:w-auto">
            <button onClick={toggleMute} className="text-white hover:text-pink-500">
              {isMuted ? <VolumeX /> : <Volume2 />}
            </button>
            <Slider
              value={[volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="w-24"
            />
            {user && (
              <>
                <button onClick={handleLike} className={`text-white hover:text-pink-500 ${isLiked ? 'text-pink-500' : ''}`}>
                  <Heart />
                </button>
                <button onClick={handleAddToPlaylist} className="text-white hover:text-pink-500">
                  <Plus />
                </button>
              </>
            )}
          </div>

          <div className='flex justify-end'>
            <button onClick={toggleMinimize} className="text-white hover:text-pink-500">
              <ChevronDown />
            </button>
          </div>
          
        </div>
      )}
    </>
  )
}
