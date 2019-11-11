import { Place } from 'src/app/domain/models/place.interface';

export const PLACES: Place[] = [
    {
      id: 1,
      name: 'Arkansas',
      username: 'arkansas',
      followers: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
      story: true
    },
    {
      id: 2,
      name: 'California',
      username: 'california',
      followers: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
      story: true
    },
    {
      id: 3,
      name: 'Florida',
      username: 'florida',
      followers: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
      story: false
    },
    {
      id: 4,
      name: 'Texas',
      username: 'texas',
      followers: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
      story: false
    },
    {
      id: 5,
      name: 'República de Chihuahua',
      username: 'republicacuu',
      followers: '10.4K',
      // tslint:disable-next-line: max-line-length
      image: 'https://scontent.fcuu2-1.fna.fbcdn.net/v/t1.0-9/p960x960/44126903_1993888730676098_2759877926357827584_o.png?_nc_cat=109&_nc_oc=AQllLXeXgLWnV3fAb9WDGaxjSeABsb1DwsJwn9MfySI5IByVcqWWFP55jaPxmtHUF8M&_nc_ht=scontent.fcuu2-1.fna&oh=909241d08748bf62eddadf6dd97bcb4a&oe=5E40C442',
      story: true
    }
];
