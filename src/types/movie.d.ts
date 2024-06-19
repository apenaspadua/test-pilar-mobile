import { CastMember } from './cast';
import { CrewMember } from './crew';
import { Genre } from './genre';
import { ProductionCompany } from './product';
import { Video } from './video';

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  } | null;
  budget: number;
  credits: {
    cast: CastMember[];
    crew: CrewMember[];
  };
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  recommendations: {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  };
  release_date: string;
  revenue: number;
  runtime: number;
  similar: {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  };
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: {
    results: Video[];
  };
  vote_average: number;
  vote_count: number;
}