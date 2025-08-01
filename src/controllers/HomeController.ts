import TemplateModel from "@/src/models/TemplateModel";

async function getHomePageData() {
  const templateModel = new TemplateModel();
  const data = {
    templates: templateModel.getAll(),
  };

  return data;
}

export default getHomePageData;
