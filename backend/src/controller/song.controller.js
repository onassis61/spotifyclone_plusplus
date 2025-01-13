import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
    try {

        // -1 means sort in descending order
        //1 means sort in ascending order
        const songs = await Song.find().sort({ createdAt: -1 });    
        res.json(songs)
    } catch (error) {
        next(error);
    }
};

export const getFeaturedSongs = async (req, res, next) => {
    try {
        //fecth 6 random songs using mongodb aggreation pipeline
        const songs = await Song.aggregate([
            {
                $sample:{size: 6}
            },
            {
                $project: {
                    id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                }
            }
            
        ])

        res.json(songs)
    } catch (error) {
        next(error);
    }
};

export const getMadeForYouSongs = async (req, res, next) => {
    try {
        //fecth 4 random songs using mongodb aggreation pipeline
        const songs = await Song.aggregate([
            {
                $sample:{size: 4}
            },
            {
                $project: {
                    id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                }
            }
            
        ])

        res.json(songs)
    } catch (error) {
        next(error);
    }
};

export const getTrendingSongs = async (req, res, next) => {
    try {
        //fecth 4 random songs using mongodb aggreation pipeline
        const songs = await Song.aggregate([
            {
                $sample:{size: 4}
            },
            {
                $project: {
                    id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                }
            }
            
        ])

        res.json(songs)
    } catch (error) {
        next(error);
    }
};