import VimeoIcon, { FBIcon, InstagramIcon, TwitterIcon, YTIcon } from '@/assets/Socialcons'
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
