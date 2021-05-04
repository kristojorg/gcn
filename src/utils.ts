import { YOUTUBE_PREVIEW_TEMPLATE } from './constants';

export function getYTPreviewUrl(id: string): string {
  return YOUTUBE_PREVIEW_TEMPLATE.replace('{VIDEO_ID}', id);
}
