import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

export function urlFor(source: SanityImageSource) {
    return imageUrlBuilder(client).image(source)
}