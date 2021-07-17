export default class UserInfo {
    constructor(userName, userJob) {
        this._userName = userName;
        this._userJob = userJob;
        this._profileName = document.querySelector(".profile__name");
        this._profileCareer = document.querySelector(".profile__career");
    }

    getUserInfo() {
        this._userName.value = this._profileName.textContent;
        this._userJob.value = this._profileCareer.textContent;
    }

    setUserInfo() {
        this._profileName.textContent = this._userName.value;
        this._profileCareer.textContent = this._userJob.value;
    }
}