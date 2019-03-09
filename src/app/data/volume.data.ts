export interface VolumeData {
    kind:       string;
    id:         string;
    etag:       string;
    selfLink:   string;
    volumeInfo: VolumeInfo;
    saleInfo:   SaleInfo;
    accessInfo: AccessInfo;
    searchInfo?: SearchInfo | null;
}

export interface AccessInfo {
    country:                string;
    viewability:            string;
    embeddable:             boolean;
    publicDomain:           boolean;
    textToSpeechPermission: string;
    epub:                   Epub;
    pdf:                    Epub;
    webReaderLink:          string;
    accessViewStatus:       string;
    quoteSharingAllowed:    boolean;
}

export interface Epub {
    isAvailable: boolean;
}

export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice?: ListPriceOrRetailPrice | null;
    retailPrice?: ListPriceOrRetailPrice1 | null;
    buyLink?: string | null;
    offers?: (OffersEntity)[] | null;
}

export interface ListPriceOrRetailPrice {
    amount: number;
    currencyCode: string;
}

export interface ListPriceOrRetailPrice1 {
    amount: number;
    currencyCode: string;
}

export interface OffersEntity {
    finskyOfferType: number;
    listPrice: ListPriceOrRetailPrice2;
    retailPrice: ListPriceOrRetailPrice2;
}

export interface ListPriceOrRetailPrice2 {
    amountInMicros: number;
    currencyCode: string;
  }

export interface VolumeInfo {
    title: string;
    subtitle?: string | null;
    authors?: (string)[] | null;
    publisher?: string | null;
    publishedDate: string;
    description?: string | null;
    industryIdentifiers?: (IndustryIdentifiersEntity)[] | null;
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories?: (string)[] | null;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    panelizationSummary?: PanelizationSummary | null;
    averageRating?: number | null;
    ratingsCount?: number | null;
}

export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface IndustryIdentifiersEntity {
    type: string;
    identifier: string;
}

export interface Dimensions {
    height: string;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail:      string;
}

export interface IndustryIdentifier {
    type:       string;
    identifier: string;
}

export interface ReadingModes {
    text:  boolean;
    image: boolean;
}

export interface SearchInfo {
    textSnippet: string;
}