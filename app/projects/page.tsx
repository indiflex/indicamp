import ProjectCreateForm from '@/app/projects/project-create-form';
import ProjectDetail from '@/app/projects/project-detail';
import { ModalDetail } from '@/components/modal-detail';
import ProjectCards from './(project-card)/card';
import ProjectCreateForm from '@/app/projects/project-create-form';

export const metadata = {
  title: 'Shop - Mosaic',
  description: 'Page description',
};

export default function ProjectsPage() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      {/* Page header */}
      <div className='mb-5'>
        {/* Title */}
        <h1 className='text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold'>
          Find the right product for you
        </h1>
      </div>

      {/* Search form */}
      <div className='max-w-xl mb-5'>
        <form className='relative'>
          <label htmlFor='app-search' className='sr-only'>
            Search
          </label>
          <input
            id='app-search'
            className='form-input w-full pl-9 py-3 bg-white dark:bg-gray-800'
            type='search'
          />
          <button
            className='absolute inset-0 right-auto group'
            type='submit'
            aria-label='Search'
          >
            <svg
              className='shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 ml-3 mr-2'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z' />
              <path d='M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z' />
            </svg>
          </button>
        </form>
      </div>

      {/* Page content */}
      <div>
        {/* Cards 1 (Video Courses) */}
        <div className='mt-8'>
          <h2 className='text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-5'>
            Video Courses
          </h2>
          <div className='grid grid-cols-12 gap-6'>
            <ProjectCards />
          </div>
        </div>
        {/*임시 추가버튼*/}
        <ProjectCreateForm />
        <ModalDetail>
          <ProjectDetail />
        </ModalDetail>
      </div>
    </div>
  );
}
