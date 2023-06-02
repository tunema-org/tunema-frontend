import { useEffect, useRef, useCallback, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'

type WaveformProps = {
  src: string
  playing: boolean
  onFinished: () => void
}

const Waveform = (props: WaveformProps) => {
  const wavesurfer = useRef<WaveSurfer>()
  const containerRef = useRef<HTMLDivElement>(null)
  const waveformRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        responsive: true,
        normalize: true,
        partialRender: true,
        height: 52,
        waveColor: '#eee',
        progressColor: '#9CB719',
        cursorColor: '#9CB719',
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 1,
      })

      wavesurfer.current.load(props.src)

      wavesurfer.current.on('finish', () => {
        props.onFinished()
      })
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy()
      }
    }
  }, [props.src])

  useEffect(() => {
    if (wavesurfer.current && props.playing) {
      wavesurfer.current.playPause()
    }
  }, [props.playing])

  return (
    <div>
      <div ref={waveformRef} />
    </div>
  )
}

export default Waveform
