'use client'
import React, { useRef, useEffect } from 'react'
import useDrawingStore from '../stores/useDrawingStore'

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { drawingData, setDrawingData } = useDrawingStore()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    // Load drawing from Zustand store if available
    if (drawingData) {
      const img = new Image()
      img.src = drawingData
      img.onload = () => context.drawImage(img, 0, 0)
    }

    let isDrawing = false
    let lastX = 0
    let lastY = 0

    const startDrawing = (e: MouseEvent) => {
      isDrawing = true
      ;[lastX, lastY] = [e.offsetX, e.offsetY]
    }

    const draw = (e: MouseEvent) => {
      if (!isDrawing) return
      context.strokeStyle = 'black'
      context.lineWidth = 2
      context.beginPath()
      context.moveTo(lastX, lastY)
      context.lineTo(e.offsetX, e.offsetY)
      context.stroke()
      ;[lastX, lastY] = [e.offsetX, e.offsetY]
    }

    const stopDrawing = () => {
      isDrawing = false
      context.closePath()
      // Save the current drawing to Zustand store
      setDrawingData(canvas.toDataURL())
    }

    // Attach event listeners
    canvas.addEventListener('mousedown', startDrawing)
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', stopDrawing)
    canvas.addEventListener('mouseout', stopDrawing)

    return () => {
      // Clean up event listeners on unmount
      canvas.removeEventListener('mousedown', startDrawing)
      canvas.removeEventListener('mousemove', draw)
      canvas.removeEventListener('mouseup', stopDrawing)
      canvas.removeEventListener('mouseout', stopDrawing)
    }
  }, [drawingData, setDrawingData])

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    context.clearRect(0, 0, canvas.width, canvas.height)
    setDrawingData('') // Clear the stored drawing data
  }
  return (
    <div className="relative">
      <button
        onClick={clearCanvas}
        className="absolute top-0 z-10 rounded-full bg-red-600 text-white"
      >
        ❌
      </button>
      <canvas ref={canvasRef} width={200} height={200} className="border-1 border-black bg-white" />
    </div>
  )
}

export default Canvas
