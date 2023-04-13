import { PrismaClient, Role } from '@prisma/client';
import { version } from 'os';
import { hashPassword } from '../src/common/helpers/crypto';

const prisma = new PrismaClient();

async function manageUsers() {
  const userAcelerabit = {
    name: 'Acelerabit Admin',
    email: 'acelerabit@admin.com',
    phone: '(84) 91111-0000',
    role: Role.ADMIN,
    password: hashPassword('Aa123456789*'),
  };

  const userHubbi = {
    name: 'Acelerabit Cliente',
    email: 'acelerabit@cliente.com',
    phone: '(84) 91111-0000',
    role: Role.CUSTOMER,
    password: hashPassword('Aa123456789*'),
  };

  const usersToInsert = [userAcelerabit];

  for (const user of usersToInsert) {
    const doesItExist = await prisma.users.findFirst({
      where: {
        email: user.email,
      },
    });

    if (!doesItExist) {
      await prisma.users.create({
        data: user,
      });
    }
  }
}

async function managePlans() {
  const freePlan = {
    name: 'Plano grátis',
    duration_months: 1,
    value: 0,
  };

  // const monthlyPlan = {
  //   name: 'Plano mensal',
  //   duration_months: 1,
  //   value: 9.90,
  // };

  // const quarterlyPlan = {
  //   name: 'Plano trimestral',
  //   duration_months: 3,
  //   value: 26.90,
  // };

  // const annualPlan = {
  //   name: 'Plano anual',
  //   duration_months: 12,
  //   value: 99.90,
  // };

  const plansToInsert = [freePlan];

  for (const plan of plansToInsert) {
    const doesItExist = await prisma.plans.findFirst({
      where: {
        name: plan.name,
      },
    });

    if (!doesItExist) {
      await prisma.plans.create({
        data: plan,
      });
    }
  }
}

async function manageSpdasTypes() {
  const spdatype1 = {
    name: 'SPDA Isolado (Mastro)',
  };

  const spdasToInsert = [spdatype1];

  for (const spda of spdasToInsert) {
    const doesItExist = await prisma.spdaType.findFirst({
      where: {
        name: spda.name,
      },
    });

    if (!doesItExist) {
      await prisma.spdaType.create({
        data: spda,
      });
    }
  }
}

async function manageNorms() {
  const norm1 = {
    name: 'NBR 5419-3',
    version: 1,
    active: true,
  };
  const norm2 = {
    name: 'IEC 62305-3',
    version: 1,
    active: true,
  };
  const norm3 = {
    name: 'NFPA 780',
    version: 1,
    active: true,
  };

  const normsToInsert = [norm1, norm2, norm3];

  for (const norm of normsToInsert) {
    const doesItExist = await prisma.norm.findFirst({
      where: {
        name: norm.name,
      },
    });

    if (!doesItExist) {
      await prisma.norm.create({
        data: norm,
      });
    }
  }
}

async function manageProjectClasses() {
  let normNBR = await prisma.norm.findFirst({ where: { name: 'NBR 5419-3' } });

  const class1 = {
    name: 'Classe I',
    norm_id: normNBR.id,
    sphere_radius: 20,
  };
  const class2 = {
    name: 'Classe II',
    norm_id: normNBR.id,
    sphere_radius: 30,
  };
  const class3 = {
    name: 'Classe III',
    norm_id: normNBR.id,
    sphere_radius: 45,
  };
  const class4 = {
    name: 'Classe IV',
    norm_id: normNBR.id,
    sphere_radius: 60,
  };

  const classesToInsert = [class1, class2, class3, class4];

  for (const projectClass of classesToInsert) {
    const doesItExist = await prisma.projectClass.findFirst({
      where: {
        name: projectClass.name,
      },
    });

    if (!doesItExist) {
      await prisma.projectClass.create({
        data: projectClass,
      });
    }
  }
}

async function manageDimensioningTypes() {
  const dimensioning1 = {
    name: 'Cálculo de Planos de Cobertura',
  };
  const dimensioning2 = {
    name: 'Cálculo de SPDA Isolado',
  };
  const dimensioning3 = {
    name: 'Verificação de Limites',
  };

  const dimensioningsToInsert = [dimensioning1, dimensioning2, dimensioning3];

  for (const dimensioning of dimensioningsToInsert) {
    const doesItExist = await prisma.dimensioningType.findFirst({
      where: {
        name: dimensioning.name,
      },
    });

    if (!doesItExist) {
      await prisma.dimensioningType.create({
        data: dimensioning,
      });
    }
  }
}

async function main() {
  await manageUsers();
  await manageSpdasTypes();
  await manageNorms();
  await manageProjectClasses();
  await manageDimensioningTypes();
  await managePlans();
}

main().finally(async () => {
  await prisma.$disconnect();
});
