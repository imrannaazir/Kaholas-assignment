// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = require('../../public/course.json')
export default function handler(req, res) {
    res.status(200).json(data)
}
