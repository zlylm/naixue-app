import member from './member.js'

const apiName = {
	member
}

export default (name)=> new Promise((resolve,reject)=>resolve(apiName[name]),500)