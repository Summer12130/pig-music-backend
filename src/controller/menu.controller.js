class MenuController {
  async getHomeList(ctx, next) {
    ctx.body = [
      {
        path: "/home/recommend",
        icon: "good-job",
        name: "每日推荐",
      },
      {
        path: "/home/playlist",
        icon: "fire",
        name: "全部歌单",
      },
      {
        path: "/home/singers",
        icon: "friends",
        name: "热门歌手",
      },
      {
        path: "/home/music",
        icon: "music",
        name: "音乐",
      },
      {
        path: "/home/dj",
        icon: "friends",
        name: "电台",
      },
      {
        path: "/home/rank",
        icon: "gem",
        name: "排行榜",
      },
    ];
  }
}

module.exports = new MenuController();
