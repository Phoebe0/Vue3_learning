import useChannelsStore from './modules/channels'
import useArticlesStore from'./modules/articles'
export default () => {
  return {
    channels: useChannelsStore(),
    articles: useArticlesStore()
  }
}