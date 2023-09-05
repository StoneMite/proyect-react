import React from'react';

export function formulario(){
    return(
        <section>
            <h1>login</h1>
            <form>
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="<PASSWORD>"/>
                <button>iniciar sesion</button>
            </form>
        </section>
    )
}