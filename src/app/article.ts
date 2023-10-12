export interface Article {
    id: number;
    title: string;
    subtitle: string;
    abstract: string;
    category: string;
    body: string;
    image_data: string;
    image_media_type: string; //maybe change to image_media_type, image_data
}
