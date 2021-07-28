export default class UserInfo {
    constructor({ userName, userJob }) {
        this._titleName = document.querySelector(userName);
        this._subtitlJob = document.querySelector(userJob);
        this.name = "";
        this.job = "";
    }

    setUserInfo(name, job) {
        this._titleName.textContent = name;
        this._subtitlJob.textContent = job;
    }

    getUserInfo() {
        return { 
            name: this._titleName.textContent, 
            job: this._subtitlJob.textContent 
        } 
    }

    updateUserInfo() {
        this._titleName.textContent = this.name;
        this._subtitlJob.textContent = this.job
    };
}

