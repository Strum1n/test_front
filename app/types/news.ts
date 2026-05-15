
export interface NewsTag {
    name: string
    code: string
    color?: string
    src?: string | null
}

export interface NewsTagGroup {
    name: string
    code: string
    values: NewsTag[]
}

export interface NewsContent {
    type: 'text' | 'mediaBlock'
    content?: string
    title?: string
    description?: string
    element?: {
        type: string
        contentType: string
        originalName: string
        src: string
    }
}

export interface NewsImage {
    id: string
    timestampX: string
    moduleId: string
    height: string
    width: string
    fileSize: string
    contentType: string
    subdir: string
    fileName: string
    originalName: string
    description: string
    handlerId: string | null
    externalId: string
    src: string
}


export interface NextNews {
    id: number
    code: string
    date: string
    title: string
    tags: NewsTagGroup[]
    picture: string
}

export interface News {
    id: number
    code: string
    is_hide_list: boolean
    date: string
    title: string
    tags: NewsTagGroup[]
    content: NewsContent[]
    next: NextNews | null
}

export interface NewsApiResponse {
    status: 'success' | 'error'
    data: {
        head: any[]
        result: News
        meta: {
            elementMetaTitle: string
            elementMetaKeywords: string
            elementMetaDescription: string
            elementPageTitle: string
            elementOgImage: NewsImage | null
        }
    }
    errors: any[]
}