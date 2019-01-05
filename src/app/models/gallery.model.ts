
export class Gallery {
    name: string;
    picturesNb?: number;
    images?: Image[];
    visible = true;

}

export class Image {
    url: string;
    position: number;
    galleryName: string;

}
