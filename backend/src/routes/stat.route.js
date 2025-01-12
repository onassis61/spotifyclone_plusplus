import { Router } from "express";
import { Album } from "../model/album.model.js";
import { Song } from "../model/song.model.js";
import { User } from "../model/user.model.js";

const router = Router();

router.get("/", async (req, res, next) => {
   
try {
   // const totalSongs = await Song.countDocuments();
   // const totalUsers = await User.countDocuments();
   // const totalAlbums = await Album.countDocuments();   
    
    const [totalSongs, totalUsers, totalAlbums] = await Promise.all([
        Song.countDocuments(),
        User.countDocuments(),
        Album.countDocuments()
    ])

} catch (error) {
    next(error);
}

});

export default router;