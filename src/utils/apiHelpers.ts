import {
  TMDB_IMAGE_BASE_URL,
  YOUTUBE_BASE_URL,
} from 'constants/Urls';

import LANGUAGES from 'constants/Languages';
import { Language } from 'src/types/languages';

const getPoster = (path?: string): string =>
  `${TMDB_IMAGE_BASE_URL}/original${path}`;

const getVideo = (key?: string): string =>
  `${YOUTUBE_BASE_URL}?v=${key}`;

const getLanguage = (language_iso?: string): Language | undefined =>
  LANGUAGES.find(language => language.iso_639_1 === language_iso);

export {
  getPoster,
  getLanguage,
  getVideo,
};
