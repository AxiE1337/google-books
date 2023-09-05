export interface IBook {
  accessInfo: {
    accessViewStatus: string
    country: string
    embeddable: boolean
    epub: { isAvailable: boolean; acsTokenLink: string }
    pdf: { isAvailable: boolean; acsTokenLink: string }
    publicDomain: boolean
    quoteSharingAllowed: boolean
    textToSpeechPermission: string
    viewability: string
    webReaderLink: string
  }
  etag: string
  id: string
  kind: string
  saleInfo: {
    buyLink: string
    country: string
    isEbook: boolean
    listPrice: {
      amount: number
      currencyCode: string
    }
    offers: any
    retailPrice: {
      amount: number
      currencyCode: string
    }
    saleability: string
  }
  searchInfo: {
    textSnippet: string
  }
  selfLink: string
  volumeInfo: {
    allowAnonLogging: boolean
    authors: string[]
    canonicalVolumeLink: string
    categories: string[]
    contentVersion: string
    description: string
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
    industryIdentifiers: any
    infoLink: string
    language: string
    maturityRating: string
    pageCount: number
    panelizationSummary: {
      containsEpubBubbles: boolean
      containsImageBubbles: boolean
    }
    previewLink: string
    printType: string
    publishedDate: string
    publisher: string
    readingModes: { text: boolean; image: boolean }
    title: string
  }
}

export interface IBooksRes {
  items: IBook[]
  kind: string
  totalItems: number
}

export type Categoty =
  | 'art'
  | 'computers'
  | 'biography'
  | 'history'
  | 'medical'
  | 'poetry'
  | ''

export type Sort = 'newest' | 'relevance'
