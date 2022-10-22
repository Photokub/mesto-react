 class Api {
    constructor(setting) {
        this._adress = setting.baseUrl;
        this._headers = setting.headers;
    }

     _request(url, options) {
         return fetch(url, options).then(this.handleResp)
     }

    handleResp(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
        }
        return res.json();
    }

     getUserInfo() {
         return this._request(`${this._adress}/users/me`, {
             method: "GET",
             headers: this._headers,
         })
     }


    patchUserInfo({user_name_field, user_job_field}) {
        return fetch(`${this._adress}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: user_name_field,
                about: user_job_field,
            })
        })
            .then((res) => this.handleResp(res));
    }

    getDefaultCards() {
        return this._request(`${this._adress}/cards`, {
            method: "GET",
            headers: this._headers,
        })
    }

    postCard({name, link}) {
        return fetch(`${this._adress}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link,
            })
        })
            .then((res) => this.handleResp(res))
    }

     changeLikeCardStatus(id, like){
         return this._request(`${this._adress}/cards/${id}/likes`,{
             method: like ? "PUT" : "DELETE",
             headers: this._headers,
         })
     }

    // putLike(id) {
    //     return fetch(`${this._adress}/cards/${id}/likes`, {
    //         method: "PUT",
    //         headers: this._headers,
    //     })
    //         .then((res) => this.handleResp(res))
    // }
    //
    // deleteLike(id) {
    //     return fetch(`${this._adress}/cards/${id}/likes`, {
    //         method: "DELETE",
    //         headers: this._headers,
    //     })
    //         .then((res) => this.handleResp(res))
    // }

    deleteMyCard(id) {
        return this._request(`${this._adress}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
    }


    patchAvatar(avatar) {
        return fetch(`${this._adress}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar,
            }),
        }).then((res) => this.handleResp(res));
    }
}

 export const api = new Api({
     baseUrl: 'https://nomoreparties.co/v1/cohort-50',
     headers: {
         "content-type": "application/json",
         Authorization: "a923fc14-3b54-43fb-958c-955df8eb7a09",
     }
 })


