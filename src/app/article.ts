export interface Article {
    id: number;
    id_user: number;
    update_date: Date;
    title: string;
    subtitle: string;
    abstract: string;
    category: string;
    body: string;
    image_data: any;
    image_media_type: any;
    thumbnail_image: any; //we call thumbnail_image bc it's how it's called in the object
    thumbnail_media_type: any;
}
