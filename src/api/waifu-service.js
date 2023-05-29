import axios from "axios";

export default class WaifuService {
    
    _apiBase = 'https://api.waifu.im/search'
    _apiBaseAlt = 'http://localhost:3030/images'

    getManyArts = async () => {
        try {
            const { data } = await axios
                .get(this._apiBaseAlt, {
                    params: {
                        many: true,
                        is_nsfw: false
                    }
                })
            return data // .images
                .map(this._transformArt)
        } catch (error) {
            throw new Error(`BOOM!, received ${error}`)
        }
    }

    _generateDescription = (tags) => {
        let description = '';
        tags.map(tag => description += `${tag.description} `)
        return description.trim()
    }

    _transformArt = (art) => {
        return {
            id: art.image_id,
            dominantColor: art.dominant_color,
            artist: art.artist !== null ? art.artist.name : 'unknown',
            uploaded: art.uploaded_at.slice(0, 10),
            orientation: art.width <= art.height ? 'portrait' : 'landscape',
            imageURL: art.url,
            description: this._generateDescription(art.tags),
            isLiked: false
        }
    }
}