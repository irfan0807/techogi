import {animate,motion} from 'framer-motion'

const AnimationWrapper = ({children,initial = { opacity:0 } ,animate = {opacity:1},transition={duration:2},keyValue}) => {
    return(
       <motion.div key={keyValue} initial={initial} animate={animate} transition={transition}>
        {children}
       </motion.div>
    )
}


export default AnimationWrapper;