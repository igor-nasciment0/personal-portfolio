import './index.scss';

export default function PopUp() {
    return (
        <div className="popup-background">
            <section className="popup">
                <div className='cover-image' />

                <div className='description'>
                    <div className='text'>
                        <h3>UniModeler</h3>
                        <p>Nunc sit amet convallis est, sit amet scelerisque quam. Sed bibendum libero sit amet mollis rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc in mi vel eros ullamcorper malesuada. Aenean condimentum ex tortor, eu mattis turpis pellentesque ac. In vel magna vel lacus iaculis dapibus. Nam nec lacus non orci efficitur auctor nec id enim. Morbi sollicitudin ligula a nibh ultrices, ut semper mauris tincidunt. Vivamus sagittis metus quis.</p>
                    </div>

                    <div className='vertical-line'/>

                    <div className='techs'>
                        <h2>Techs Used</h2>
                        
                        <div>
                            <div>
                                <img src="/assets/images/icons/react.svg" alt="" />
                                <h4>React</h4>
                            </div>

                            <div>
                                <img src="/assets/images/icons/react.svg" alt="" />
                                <h4>React</h4>
                            </div>

                            <div>
                                <img src="/assets/images/icons/react.svg" alt="" />
                                <h4>React</h4>
                            </div>
                        </div>

                        <button className='live'>
                            <img src="/assets/images/icons/link.svg" alt="" />
                            see it on live
                        </button>

                        <button className='github'>
                            <img src="/assets/images/icons/github.svg" alt="" />
                            check repository
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}