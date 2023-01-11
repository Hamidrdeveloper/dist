import i18n from '@src/core/i18n/config';
import { PageLayout } from '@src/shared/components';
import ModalHeader from '@src/shared/components/PageLayout/GenericModal/ModalHeader/ModalHeader';
import { UpsertWrapper } from '@src/shared/styles';
import React, { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import VariationCategoryUpsert from '../containers/VariationCategoryUpsert';
import { VariationCategory } from '../model/variationCategory.entity';
import moduleInfo from '../ModuleInfo.json';
import VariationCategoryModule from '../VariationCategory.module';

const VariationUpsertPage = (): ReactElement => {
  const navigate = useNavigate();
  const { variationCategory_id: id } = useParams();
  const [singleData, setSingleData] = useState({} as VariationCategory);
  const variationCategoryModule = new VariationCategoryModule();
  const title = variationCategoryModule.title[0];
  const moduleUrl = `${moduleInfo.Route.replace('*', '')}`;

  const routes = [
    ...variationCategoryModule.breadcrumbItems,
    {
      path: '',
      breadcrumbName: id ? `${i18n.t('Global.Update')} ${title} - ${id}` : `${i18n.t('Global.New')} ${title}`,
    },
  ];

  useEffect(() => {
    if (id) {
      variationCategoryModule.apiService.getOne(+id).then((data) => {
        setSingleData(data);
      });
    }
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageLayout<VariationCategory> module={variationCategoryModule}>
      <PageLayout.Breadcrumb routes={routes} />

      <PageLayout.Panel>
        <UpsertWrapper>
          <div className="header">
            <ModalHeader onClose={() => navigate(`/admin${moduleUrl}`)} items={routes} />
          </div>
          <VariationCategoryUpsert singleData={singleData} onCallback={goBack} />
        </UpsertWrapper>
      </PageLayout.Panel>
    </PageLayout>
  );
};

export default VariationUpsertPage;
