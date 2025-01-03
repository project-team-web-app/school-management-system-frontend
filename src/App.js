import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutSchoolPage from './pages/AboutSchoolPage';
import TeacherPage from './pages/TeacherPage';
import EventPage from './pages/EventPage';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import NoticePage from './pages/NoticePage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DefaultLayout from './layouts/DefaultLayout';
import BlogDetailPage from './pages/BlogDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import EducatePage from './pages/EducatePage';
import { useTranslation } from 'react-i18next';
import EventDetailPage from './pages/EventDetailPage';
import NoticeDetailPage from './pages/NoticeDetailPage';

function App() {
  const { i18n } = useTranslation();
    const setGlobalFontClass = (language) => {
        document.body.className = ''; // Clear any existing class
        if (language === 'en') {
            document.body.classList.add('english');
        } else if (language === 'cn') {
            document.body.classList.add('chinese');
        } else if (language === 'kh') {
            document.body.classList.add('khmer');
        } else {
            document.body.classList.add('khmer'); // Fallback
        }
    };

    useEffect(() => {
        setGlobalFontClass(i18n.language);
    }, [i18n.language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutSchoolPage />} />
          <Route path='/teachers' element={<TeacherPage />} />
          <Route path='/events' element={<EventPage />} />
          <Route path='/events/:code' element={<EventDetailPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:code' element={<BlogDetailPage />} />
          <Route path='/notice' element={<NoticePage />} />
          <Route path='/notice/:code' element={<NoticeDetailPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/admission' element={<AdmissionPage />} />
          <Route path='/education' element={<EducatePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
