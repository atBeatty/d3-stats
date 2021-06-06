// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}


// Not to worry though, this is where Next.js shines.In the pages directory, we can create an additional special directory called api.In this API directory, as the name implies, we can create api endpoints that are executed exclusively on the backend.The best way to see how this works is to go and create one, so let's do that next. In the pages directory, create an api directory, and there create a new file called daily.js.