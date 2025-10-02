import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.etities';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new Error(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  create(movieData: Movie) {
    this.movies.push({
      ...movieData,
      id: this.movies.length + 1,
    });
  }

  deleteOne(id: string) {
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }
}
