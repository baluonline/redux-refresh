//Action creator
export const SelectSong = song => {
    //return an action like plain object
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
}