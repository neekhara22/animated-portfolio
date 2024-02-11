import { useRef } from "react"
import "./Portfolio.scss"
import {motion, useScroll, useSpring,useTransform} from "framer-motion"

const items=[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"The React E-commerce Project: Codebook is a project based course designed to gain practical experience in designing and developing a dynamic web application. It is a hands-on course that makes learning React enjoyable and straightforward."
    },
     {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"The purpose of the Blog Writing Project is to allow students to practice their research and writing skills and grow in their photography, computer science, art and creativity. Use the Blog Post Worksheet as a tool to encourage your student to brainstorm and outline their project each week.."
    },
     {
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/3151766/pexels-photo-3151766.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"VanillaJS is a name to refer to using plain JavaScript without any additional libraries like jQuery back in the days. People use it as a joke to remind other developers that many things can be done nowadays without the need for additional JavaScript libraries."
    },
     {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"Apps as Soundcloud, Spotify, and Apple Music are the most widely used music streaming apps. The primary purpose of the music streaming application is to play music available in the databases of the service, compose custom playlists and suggest similar songs. Music player in this project is application software based on Google Android. Music is one of the best ways to relieve pressure in stressful modern society life. The purpose of this project is to develop a player which can play the mainstream file format."
    }
]

const Single =({item})=>{
    const ref = useRef();
    const { scrollYProgress } = useScroll({target:ref,
    // offset:["start start","end start"]
    })
    const y =useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return(
        <section >
        <div className="container" >
       <div className="wrapper">
       <div className="imageContainer" ref={ref}>
        <img src={item.img} alt="" />
       </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
       </div>
            
        </div>
        </section>
    )
}

const Portfolio =()=>{
    const ref=useRef();
    const { scrollYProgress } = useScroll({target:ref,offset:["end end","start start"],})
    const scaleX =useSpring(scrollYProgress,{
         stiffness: 100,
    damping: 30,
    })
    return <div className="portfolio" ref={ref}>
    <div className="progress">
    <h1>Featured Works</h1>
    <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
    </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
}

export default Portfolio