
export type ItemType = {
  id: number
  name: string
}
export type IResType = {
  data: {
    channels: ItemType[]
  }
  message: string
}

export type IListItemType = {
  art_id: string
  aut_id: string
  aut_name: string
  comm_count: number
  cover: {
    type: number
    images: string[]
  }
  is_top: number
  pubdate: string
  title: string
}
// 文章列表类型
export type IListType = {
  message: string
  data: {
    pre_timestamp: string
    results: IListItemType[]
  }
}