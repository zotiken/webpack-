 class Post {
  constructor(title) {
    (this.title = title), (this.date = new Date());
  }
  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toDateString(),
    });
  }
}
async function name(els) {
  await els;
}
 export default Post;
 