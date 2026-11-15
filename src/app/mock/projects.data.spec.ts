import { PROJECTS_DATA } from './projects.data';

describe('PROJECTS_DATA Catalog Integrity', () => {
  it('should contain the 5 projects required by the activity', () => {
    expect(PROJECTS_DATA.length).toBe(5);
  });

  it('should ensure every published project has valid https repoUrl and demoUrl', () => {
    const publishedProjects = PROJECTS_DATA.filter((project) => project.estado !== 'proximamente');
    expect(publishedProjects.length).toBeGreaterThanOrEqual(1);

    for (const project of publishedProjects) {
      expect(project.nombre.trim().length).toBeGreaterThan(0);
      expect(project.descripcion.trim().length).toBeGreaterThan(0);
      expect(project.tecnologias.length).toBeGreaterThan(0);
      expect(project.caracteristicas.length).toBeGreaterThan(0);
      expect(project.repoUrl).toMatch(/^https:\/\/github\.com\/.+/);
      expect(project.demoUrl).toMatch(/^https:\/\/.+/);
    }
  });
});
