import axios from './axios'

export function getHomeMultidata(pageNo,limit) {
  return axios({
    url: '/videos/appPage',
    params: {
      pageNo,
      limit
    }
  })
}

// export function getHomeData(type, page) {
//   return axios({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }
