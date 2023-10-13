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
    image_media_type: any; //maybe change to image_media_type, image_data
}
