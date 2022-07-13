import dayjs from 'dayjs'
import { App } from 'vue'

export default function(app: App<Element>){
    app.directive('timeformatter',{
        created(el: HTMLElement, bindings:any) {
            bindings.formatString = 'YYYY-MM-DD HH:mm:ss'
            bindings.value && (bindings.formatString = bindings.value)
        },
        mounted(el: HTMLElement, bindings: any){
            const textContent:string = el.textContent || ''
            let timestamp = parseInt(textContent) 
            if(textContent.length === 10){
                timestamp = timestamp * 10
            }
            el.textContent = dayjs(timestamp).format(bindings.formatString)
        }
    })
}