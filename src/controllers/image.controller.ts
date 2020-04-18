import { Request, Response } from "express";
import { createCanvas } from 'canvas';

export const createImage = (_request: Request, response: Response, _next: Function) => {
  const canvas = createCanvas(128, 64);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0,0,0,0.8)';
  ctx.fillRect(-5, 490, 1250, 300);

  ctx.beginPath();
  ctx.moveTo(590, -100);
  ctx.lineWidth = 25;
  ctx.strokeStyle = 'rgba(255,255,255,1)';
  ctx.lineTo(590, 730);
  ctx.stroke();

  response.status(200).send(canvas.toDataURL());
}