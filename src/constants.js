export const baublePositions = [
    {"top":"80%", "left":"16%"},
    {"top":"80%", "left":"26%"},
    {"top":"80%", "left":"36%"},
    {"top":"80%", "left":"46%"},
    {"top":"80%", "left":"56%"},
    {"top":"80%", "left":"66%"},
    {"top":"80%", "left":"76%"},
    {"top":"70%", "left":"21%"},
    {"top":"70%", "left":"31%"},
    {"top":"70%", "left":"41%"},
    {"top":"70%", "left":"51%"},
    {"top":"70%", "left":"61%"},
    {"top":"70%", "left":"71%"},
    {"top":"60%", "left":"26%"},
    {"top":"60%", "left":"36%"},
    {"top":"60%", "left":"46%"},
    {"top":"60%", "left":"56%"},
    {"top":"60%", "left":"66%"},
    {"top":"50%", "left":"26%"},
    {"top":"50%", "left":"36%"},
    {"top":"50%", "left":"46%"},
    {"top":"50%", "left":"56%"},
    {"top":"50%", "left":"66%"},
    {"top":"40%", "left":"31%"},
    {"top":"40%", "left":"41%"},
    {"top":"40%", "left":"51%"},
    {"top":"40%", "left":"61%"},
    {"top":"30%", "left":"36%"},
    {"top":"30%", "left":"46%"},
    {"top":"30%", "left":"56%"},
    {"top":"20%", "left":"36%"},
    {"top":"20%", "left":"46%"},
    {"top":"20%", "left":"56%"},
    {"top":"10%", "left":"41%"},
    {"top":"10%", "left":"51%"},
]
export const uniqueModalTypes = ["BJ","AE","MS","J","STD","HE"]
export const trivia = [
    "Before turkey the traditional Christmas meal in England was a pigs head and mustard",
    "Many parts of the Christmas tree can be eaten with the needles being a good source of vitamin C",
    "The first postage stamp issued to commemorate Christmas was issued in Austria in 1937",
    "Christmas pudding was originally a soup made with raisins and wine",
    "Scientists calculated that Santa would have to visit 822 homes per second to deliver all the worlds presents on Christmas Eve (travelling at 650 m/s)"

]
export const jokes = [
    {joke:"How does Rudolph know when Christmas is coming?", answer:"He looks at his calendeer"},
    {joke:"What do snowmen eat for lunch?", answer:"Ice bergers"},
    {joke:"What do reindeer hang on their Christmas tree?", answer:"Ice bergers"},
    {joke:"What’s red and green and guides Santa’s sleigh?", answer:"Rudolph the red nosed pickle"},
    {joke:"What do you sing at a snowman’s birthday party?", answer:"Freeze a jolly good fellow"},
    {joke:"What is 96 years old, walks with a stick and lives at the North Pole?", answer:"A little cold lady"},
    {joke:"What jumps from cake to cake and tastes of almonds?", answer:"Tarzipan"},
    {joke:"Why did no one bid for Rudolph and Blitzen on eBay?", answer:"Because they were two deer!"},
    {joke:"How did Scrooge win the football game?", answer:"The ghost of Christmas passed!"}
]

const importAll = (r) => {
    return r.keys().map(r)
}
  
export const baubleSvgs = importAll(require.context('./icons/baubles', false, /\.(svg)$/))

const gtyJpgs = importAll(require.context('./media/gty', false, /\.(jpg)$/))

export const gtys = [
    {path:gtyJpgs[0], answer: "1986", options: ["1986","1985","1989"]},
    {path:gtyJpgs[1], answer: "1995", options: ["1997","1992","1995"]},
    {path:gtyJpgs[2], answer: "2017", options: ["2016","2017","2018"]},
]