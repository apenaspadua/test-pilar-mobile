import { Movie } from './movie'
import { Dates } from './dates'

export type NowMovies = {
  dates: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
