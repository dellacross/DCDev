import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'

const About = () => {

    const { selectedProject } = useContext(ProjectContext)

    return (
        <div className='flex flex-col gap-y-4 text-sm overflow-y-auto h-full'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor magna, ullamcorper eu elementum id, aliquam a lectus. Cras sollicitudin tortor non erat consequat, et pharetra lorem aliquam. Phasellus imperdiet malesuada mi, non ornare urna viverra in. Sed ut iaculis est. Praesent non luctus est, et sodales risus. Suspendisse id facilisis mauris. Mauris gravida elit vel sapien eleifend, tincidunt euismod leo sagittis. Aliquam sollicitudin sapien nunc, non sodales dui suscipit ut. Cras suscipit nulla sed justo blandit, vitae tempor leo mollis. Proin ac lectus sed leo rhoncus imperdiet non non orci. Vivamus eu nulla ac lectus aliquam hendrerit ac sed lacus. Suspendisse pellentesque gravida turpis molestie mattis. Nullam id porttitor magna. Sed eget quam massa. Ut lectus metus, facilisis id volutpat at, consequat interdum tellus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor magna, ullamcorper eu elementum id, aliquam a lectus. Cras sollicitudin tortor non erat consequat, et pharetra lorem aliquam. Phasellus imperdiet malesuada mi, non ornare urna viverra in. Sed ut iaculis est. Praesent non luctus est, et sodales risus. Suspendisse id facilisis mauris. Mauris gravida elit vel sapien eleifend, tincidunt euismod leo sagittis. Aliquam sollicitudin sapien nunc, non sodales dui suscipit ut. Cras suscipit nulla sed justo blandit, vitae tempor leo mollis. Proin ac lectus sed leo rhoncus imperdiet non non orci. Vivamus eu nulla ac lectus aliquam hendrerit ac sed lacus. Suspendisse pellentesque gravida turpis molestie mattis. Nullam id porttitor magna. Sed eget quam massa. Ut lectus metus, facilisis id volutpat at, consequat interdum tellus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor magna, ullamcorper eu elementum id, aliquam a lectus. Cras sollicitudin tortor non erat consequat, et pharetra lorem aliquam. Phasellus imperdiet malesuada mi, non ornare urna viverra in. Sed ut iaculis est. Praesent non luctus est, et sodales risus. Suspendisse id facilisis mauris. Mauris gravida elit vel sapien eleifend, tincidunt euismod leo sagittis. Aliquam sollicitudin sapien nunc, non sodales dui suscipit ut. Cras suscipit nulla sed justo blandit, vitae tempor leo mollis. Proin ac lectus sed leo rhoncus imperdiet non non orci. Vivamus eu nulla ac lectus aliquam hendrerit ac sed lacus. Suspendisse pellentesque gravida turpis molestie mattis. Nullam id porttitor magna. Sed eget quam massa. Ut lectus metus, facilisis id volutpat at, consequat interdum tellus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor magna, ullamcorper eu elementum id, aliquam a lectus. Cras sollicitudin tortor non erat consequat, et pharetra lorem aliquam. Phasellus imperdiet malesuada mi, non ornare urna viverra in. Sed ut iaculis est. Praesent non luctus est, et sodales risus. Suspendisse id facilisis mauris. Mauris gravida elit vel sapien eleifend, tincidunt euismod leo sagittis. Aliquam sollicitudin sapien nunc, non sodales dui suscipit ut. Cras suscipit nulla sed justo blandit, vitae tempor leo mollis. Proin ac lectus sed leo rhoncus imperdiet non non orci. Vivamus eu nulla ac lectus aliquam hendrerit ac sed lacus. Suspendisse pellentesque gravida turpis molestie mattis. Nullam id porttitor magna. Sed eget quam massa. Ut lectus metus, facilisis id volutpat at, consequat interdum tellus.
            </p>
        </div>
    )
}

export default About