export const NETFLIX_LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-08-21/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR_URL = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS ={
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "Bearer " +process.env.REACT_APP_TMDB_KEY,
    }
}

export const IMG_CDN="https://image.tmdb.org/t/p/w400";
export const NOW_PLAYING_MOVIE="https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIE="https://api.themoviedb.org/3/movie/popular?page=1";
export const TOPRATED_MOVIE="https://api.themoviedb.org/3/movie/top_rated?page=1";