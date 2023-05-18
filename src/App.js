import './App.css'

function App() {
  return (
    <div className="main">
      <div className="topmost">
        <span className='head'>Sosmad</span>
        <div className="icon">
          <i class="fa-regular fa-bell"></i>
          <i class="fa-sharp fa-regular fa-comment"></i>
        </div>
      </div>
      <div className="stories">
        <div className="text">
        <p class="text-lg my-2">Stories</p>
          <div className="allcards">
            <div class="card mx-4" style={{ width: 18 + 'rem' }}>
              <img
                src="https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu"
                alt=""
                class=" h-56 w-44 rounded-3xl -z-10"
              />
              <div class=" absolute bg-slate-500 bottom-0 z-0 w-full rounded-b-2xl rounded-t-lg glass">
                <img
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                  style={{ width: 2 + 'rem' }}
                  class=" w-7 h-7 rounded-full mx-auto relative bottom-3"
                  alt=""
                />
                <p class="text-center text-sm relative bottom-2">
                  Adison Mango
                </p>
              </div>
            </div>
            <div class="card mx-4" style={{ width: 18 + 'rem' }}>
              <img
                src="https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu"
                alt=""
                class=" h-56 w-44 rounded-3xl -z-10"
              ></img>
              <div class="absolute bg-slate-500 bottom-0 z-0 w-full rounded-b-2xl rounded-t-lg glass">
                <img
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                  style={{ width: 2 + 'rem' }}
                  class=" w-7 h-7 rounded-full mx-auto relative bottom-3"
                  alt=""
                />
                <p class="text-center text-sm relative bottom-2">
                  Adison Mango
                </p>
              </div>
            </div>
            <div class="card mx-4" style={{ width: 18 + 'rem' }}>
              <img
                src="https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu"
                alt=""
                class=" h-56 w-44 rounded-3xl -z-10"
              ></img>

              <div class=" absolute bg-slate-500 bottom-0 z-0 w-full rounded-b-2xl rounded-t-lg glass">
                <img
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                  style={{ width: 2 + 'rem' }}
                  class=" w-7 h-7 rounded-full mx-auto relative bottom-3"
                  alt=""
                />
                <p class="text-center text-sm relative bottom-2">
                  Adison Mango
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="btn1">Explore</button>
        <button disabled className="btn2">
          Discover
        </button>
      </div>
      <div className="main2">
        <div className="head">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            className="imgh"
            alt=""
          />
          <div className="name">
            <h1>Ahmed Dorwart</h1>
            <p class=" text-xs text-slate-400">10 Mins Ago</p>
          </div>
        </div>

        <div class="card2">
          <img
            src="https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu"
            alt=""
            className="humanimg"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
