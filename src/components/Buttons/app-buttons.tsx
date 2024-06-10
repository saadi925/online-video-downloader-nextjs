import VimeoIcon, { FBIcon, InstagramIcon, TwitterIcon, YTIcon } from '@/assets/Socialcons'
//  additional styles to each button can be added, in case of using some state functionality on these , you should use memo and callback with proper dependencies
export default function useButtonsBar() {
    const buttons = [
    {
        title : 'Youtube',
        className :``,
        Icon : YTIcon
        
    },  {
        title : 'Facebook', 
        className :``,
        Icon : FBIcon

    }, {
        title : 'Twitter',
        className :``,
        Icon : TwitterIcon

    }, 
    {
        title : 'Instagram', 
        className :``,
        Icon : InstagramIcon

    },
    {
        title : 'Vimeo', 
        className :``,
        Icon : VimeoIcon

    }
  ]
  return buttons
}
