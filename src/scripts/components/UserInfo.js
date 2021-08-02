export default class UserInfo {
    constructor({userName, userJob, userAvatar, userId}) {
        this._titleName = document.querySelector(userName);
        this._subtitlJob = document.querySelector(userJob);
        this._userAvatar = document.querySelector(userAvatar);
        this._userId = userId
    }

    setUserInfo(item) {
        this._titleName.textContent = item.name; 
        this._subtitlJob.textContent = item.about; 
        this._userAvatar.src = item.avatar;
        this._userId = item._id;
    }

    getUserInfo() {
        return {
            name: this._titleName.textContent,
            about: this._subtitlJob.textContent,
            avatar: this._userAvatar,
            userId: this._userId
        } 
    }
}