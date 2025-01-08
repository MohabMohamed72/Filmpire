import {configureStore} from '@reduxjs/toolkit'
import  GetAllMoveiCategoreis  from './MoviesSlice/AllMoveisFetch/CategoriesMoveis'
import  GetAllMoveiGenres  from './MoviesSlice/AllMoveisFetch/GenresMoveis'
import  GetAllGenres  from './MoviesSlice/MoveiGeners/AllGeners'
import  GetAllMoveiDetails from './MoviesSlice/MoveiDetails/AllMoveiDetails'
import  GetAllMoveiCast  from './MoviesSlice/AllCast/AllCast'
import  GetAllVideos  from './MoviesSlice/MoveiVideo/MoveiVedios'
import  GetActorDetails  from './MoviesSlice/ActroDetails/ActorsDetails'
import GetActorMoveis  from './MoviesSlice/ActorsMoveis/ActorMovei'
import  MoveisSearch  from './MoviesSlice/SerachMoveis/MoveisSearch'
import  ButtonsHandel  from './MoviesSlice/ButtonsSlice/ButtonsSlice'
import  DrakMode  from './MoviesSlice/DrakMode/DrakMode'
import  GetRequestToken  from './MoviesSlice/Login/Login'
import  SearchVisablilty  from './MoviesSlice/SearchVisablity/SearchVisiabilty'






export const store = configureStore({
    reducer:{
        GetAllMoveiCategoreis:GetAllMoveiCategoreis,
        GetAllMoveiGenres:GetAllMoveiGenres,
        GetAllGenres:GetAllGenres,
        GetAllMoveiDetailss:GetAllMoveiDetails,
        GetAllMoveiCast:GetAllMoveiCast,
        GetAllVideos:GetAllVideos,
        GetActorDetails:GetActorDetails,
        GetActorMoveis:GetActorMoveis,
        MoveisSearch:MoveisSearch,
        ButtonsHandel:ButtonsHandel,
        DrakMode:DrakMode,
        GetRequestToken:GetRequestToken,
        SearchVisablilty:SearchVisablilty,

 
    }
})